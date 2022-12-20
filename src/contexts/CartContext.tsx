import React, { createContext } from "react";
import { useState } from "react";
import api from "../services/api";
import { useEffect } from "react";
import { useContext } from "react";
import {UserContext} from "../contexts/UserContext"

export const CartContext = createContext<iCartProviderFunctions>(
    {} as iCartProviderFunctions
  );

  interface iCart {
    id: number,
    name: string,
    category: string,
    price: number,
    img: string,
    qty: number
  }

  interface iCartProviderFunctions {
    products: null | iCart[]
    cart: null | iCart[];
    searchIt: string | null;
    get_products: () => iCart[] | unknown
    add_product: (data: iCart) => iCart | unknown;
    edit_product_sum: (data: iCart) => iCart | unknown;
    edit_product_sub: (data: iCart) => iCart | unknown;
    delete_product: (data: iCart) => iCart | unknown;
    set_search: (data: string | null) => string | null;
  }

  interface iCartProviderProps {
    children: React.ReactNode;
  }

  export const CartProvider = ({ children }: iCartProviderProps) => {

    let token = localStorage.getItem("@KenzieBurgerToken")

    if (token) {
        token = JSON.parse(token)
    }
  
    const [cart, setCart] = useState([] as iCart[]);
    const [products, setProducts] = useState([] as iCart[]);
    const [searchIt, setSearchIt] = useState<string | null>("");

    const get_products = async () => {
      try {
          const response = await api.get("products ", {
              headers: {
                  authorization: `Bearer ${token}`
              }
          });

          if (response) {
            setProducts(response.data)
          }
          
          return products;
        } catch (error) {
          return error;
        }
  }
  
    useEffect(()=>{
      const saved_cart = localStorage.getItem("@KenzieBurgerCart")  
    
      if (saved_cart) {
        setCart(JSON.parse(saved_cart))
      }

      get_products()
    },[])

    const set_search = (data: string | null) => {
      setSearchIt(data)
      return searchIt
    }

    const add_product = async (data: iCart):Promise<number | unknown> => {
      setCart([...cart, data])
      return cart
    };
  
    const edit_product_sum = async (data: iCart):Promise<number | unknown> => {

        const new_cart = cart.map((item)=>{
            if (item.id === data.id) {
                item.qty += 1
                return item
            } else {
                return item
            }
        })

        setCart(new_cart)

        return cart
  
    };

    const edit_product_sub = async (data: iCart):Promise<number | unknown> => {

        const new_cart = cart.map((item)=>{
            if (item.id === data.id) {
                item.qty -= 1
                return item
            } else {
                return item
            }
        })

        setCart(new_cart)

        return cart
  
    };

    const delete_product = async (data: iCart):Promise<number | unknown> => {

        const new_cart = cart.filter(item => item.id !== data.id)

        setCart(new_cart)

        return cart
  
    };



    return (
      <CartContext.Provider
        value={{ products, cart, searchIt, get_products, add_product, edit_product_sum, edit_product_sub, delete_product, set_search }}
      >
        {children}
      </CartContext.Provider>
    );
    
  };