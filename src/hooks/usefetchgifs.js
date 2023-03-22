import { useEffect, useState } from "react";
import { GetGifs } from "../helpers/getgif";

export const UseFetchGifs = (category) => {
    const [Images,SetImages] = useState([]);
    const [IsLoading,SetIsLoading]= useState(true);
    const GetImages = async () => {
        const NewImages = await GetGifs(category);
        SetImages(NewImages);
        SetIsLoading(false);
      };
      useEffect(() => {
        GetImages();
      }, []);
    return {
        Images,
        IsLoading
    }
}

