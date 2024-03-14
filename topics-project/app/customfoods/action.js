"use server";
import { createClient } from "/src/utils/supabase/server";
// Create the client
const supabase = createClient();

  // takes our handled form and sends it to SB using a hard coded uuid for now 
export async function sendData(handeledformData) {
    try {
      const { error } = await supabase
      .from("nutrition_log")
      .insert([
        {
          uuid: "65567f92-7a4e-4d12-b1dc-1c4e2dd7343f",
          food_name: handeledformData.food_name,
          calories: handeledformData.calories,
          protein: handeledformData.protein,
          fat: handeledformData.fat,
          carbs: handeledformData.carbs,
        },
        
      ]);
      if (error) {
        throw error;
      }
      } catch (error) {
      console.error("Error reporting message:", error);
    }
  };



  