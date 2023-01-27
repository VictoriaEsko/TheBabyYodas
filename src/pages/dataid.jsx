import { useEffect, useState } from "react";
import axios from "axios";

export default function dataid(){
    const [data, setData] = useState("")
    const [loading, setLoading] = useState(false)

    const getLastItem = (thePath) =>
    thePath.sustring(thePath.lastindexOf ("/") + 1);
    
}
