import { supabase } from "./supabase";

export async function order({ orderObj, cart }) {
  const { data: stocks } = await supabase.from("products").select("id,stock");
  for (let item of cart) {
    if (stocks.find((s) => s.id === item.id).stock < item.amount)
      throw new Error(
        `${item.productname} ürününde talep ettiğiniz kadar stok yok`
      );
  }
  const { data, error } = await supabase
    .from("customers")
    .insert([orderObj])
    .select()
    .single();
  if (error) throw new Error("couldnt insert");
  const { data: orderData, error: orderError } = await supabase
    .from("orders")
    .insert([{ customer_id: data.id, status: "pending" }])
    .select()
    .single();
  if (orderError) throw new Error("couldnt insert order");
  const { error: orderDetailsError } = await supabase
    .from("orderdetails")
    .insert(
      cart.map((cartItem) => ({
        order_id: orderData.id,
        product_id: cartItem.id,
        amount: cartItem.amount,
        singleprice: cartItem.price,
      }))
    )
    .select();

  if (orderDetailsError) throw new Error("couldn't insert orderdetails");
  return orderData;
}
export async function getOrder(id) {
  const { data, error } = await supabase
    .from("orders")
    .select("*,orderdetails(*,products(productname)),customers(*)")
    .eq("id", id)
    .single();
  if (error) {
    console.log(error.message);
    throw new Error("orders couldnt returned");
  }
  return data;
}
export async function getOrders() {
  const { data, error } = await supabase
    .from("orders")
    .select("*,orderdetails(*,products(productname)),customers(*)")
    .order("created_at", { ascending: true });
  if (error) {
    console.log(error.message);
    throw new Error("orders couldnt returned");
  }
  return data;
}
export async function updateStatus({ currentStatus, id }) {
  const newStatus =
    currentStatus === "pending"
      ? "approved"
      : currentStatus === "approved"
      ? "shipped"
      : "errorStatus";
  console.log(newStatus, id);
  const { data, error } = await supabase
    .from("orders")
    .update({ status: newStatus })
    .eq("id", id);

  if (error) throw new Error(error.message);
  return data;
}
