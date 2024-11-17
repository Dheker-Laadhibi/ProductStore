import{create} from "zustand"
//Zustandi is a bib that manipulates state  of an app ,shared     
export const  useProductStore =create((set)=>({

//returning an object 
products:[],
setProducts:(products)=>set({
    products}),

    
    createproduct:async(newProduct)=>{
        if (!newProduct.name || !newProduct.image || !newProduct.price){

             // Return an error message if fields are incomplete.
            return{success:false , message :"please fill in the fiels   "}
    }
     // ❌ ERROR: This line is invalid and incomplete.
    // `await("http://localhost/5000/apix/products")` is not a valid statement.
    // Missing the HTTP method (e.g., `fetch` or `axios`).

  const res = await fetch("/api/products", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newProduct),
		});
        
    const data = await res.json();
    //Updating the State:
set((state) => ({ products: [...state.products, data.data] }));

return { success: true, message: "Product created successfully" };
	},

}));

