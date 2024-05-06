import { PAGE_SIZE } from "../constants";
import { supabase } from "./supabase";

export async function getProducts() {
	let query = supabase
		.from("products")
		.select("*")
		.order("created_at", { ascending: false });
	const { data, error } = await query;
	if (error) throw new Error("data could not be downloaded");
	return data;
}
export async function getProduct(id) {
	const { data, error } = await supabase
		.from("products")
		.select("*")
		.eq("id", id)
		.single();
	if (error) throw new Error("single product could not be downloaded");
	return data;
}
export async function getFilteredProducts(
	types,
	brands,
	pageNum,
	searchQuery,
	orderBy
) {
	let query = supabase
		.from("products")
		.select("*", { count: "exact" })
		.range((pageNum - 1) * PAGE_SIZE, PAGE_SIZE * pageNum - 1);

	if (orderBy) {
		const [field, direction] = orderBy.split("-");
		query = query.order(field, { ascending: direction === "asc" });
	} else query = query.order("created_at", { ascending: false });
	if (types.arr !== undefined) {
		query = query.in(types.filter, types.arr);
	}
	if (brands.arr !== undefined) {
		query = query.in(brands.filter, brands.arr);
	}
	if (searchQuery) query = query.ilike("productname", `%${searchQuery}%`);
	const { data, error, count } = await query;

	if (error) throw new Error("data could not be downloaded");

	return { data, count };
}
export async function addProduct(product) {
	const imageName = `${Math.random()}-${product.image.name}`.replaceAll(
		"/",
		""
	);
	const imagePath = `https://oohfktesfbyoxetnlxog.supabase.co/storage/v1/object/public/images/${imageName}`;
	const { data, error } = await supabase
		.from("products")
		.insert([{ ...product, image: imagePath }])
		.select();
	if (error) throw new Error("data could not be uploaded");
	const { error: storageError } = await supabase.storage
		.from("images")
		.upload(imageName, product.image);
	if (storageError) {
		await supabase.from("products").delete().eq("id", data.id);
		throw new Error(storageError.message);
	}
	return data;
}
export async function deleteProduct(id) {
	const { error } = await supabase.from("products").delete().eq("id", id);
	if (error) throw new Error("product could not be deleted");
}
// https://zxqlqudaxwadebaivden.supabase.co/storage/v1/object/public/car_images/hp2.jpeg?t=2024-04-18T10%3A14%3A15.879Z
