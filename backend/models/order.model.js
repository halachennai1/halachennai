import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		products: [
			{
				product: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Product",
					required: true,
				},
				quantity: {
					type: Number,
					required: true,
					min: 1,
				},
				price: {
					type: Number,
					required: true,
					min: 0,
				},
				customizableval: {
					type: String,
					default: "",
				},
				regularSizeval: {
					type: String,
					// enum: ["S", "M", "L", "XL", "XXL"],
				},
				shoeSizeval:{
					type:String,
					// enum: [],
				},
				kidSizeval:{
					type:String,
					// enum: [],
				},
				color: {
					type:String,
					enum: ["Red", "Blue", "Green", "Black", "White"],
				},
			},
		],
		status: {
			type: String,
			enum: ["placed","dispatched","delivered"],
			default: "placed",
		},
		totalAmount: {
			type: Number,
			required: true,
			min: 0,
		},
		address:{
			type: String,
			required: true,
		},
		phoneNumber:{
			type: String,
			required: true,
		},
		SessionId: {
			type: String,
			unique: true,
		},
	},
	{ timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
