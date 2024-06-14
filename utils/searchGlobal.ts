import { convertToGlobalData } from "./convertData";
import { DataGlobalProps } from "./dataType";

export const searchGlobalData = (keyword: string): DataGlobalProps[] => {
    const globalData = convertToGlobalData();
    return globalData.filter(item => item.judul.toLowerCase().includes(keyword.toLowerCase()));
};
