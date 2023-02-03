import {MdKeyboardArrowLeft} from "react-icons/md"
import { useNavigate } from "react-router-dom"

export default function backBtn() {

   const navigate = useNavigate()

  return (
    <button onClick={() => navigate(-1)} className="back">
        <MdKeyboardArrowLeft />
    </button>
  )
}