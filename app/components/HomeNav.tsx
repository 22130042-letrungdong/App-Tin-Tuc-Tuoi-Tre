
import { House , ChevronDown} from "lucide-react";

const categories = [
        "Video", "Thời sự", "Thế giới", "Pháp luật", "Kinh doanh", "Công nghệ",
        "Xe", "Du lịch", "Nhịp sống trẻ", "Văn hóa", "Giải trí", "Thể thao",
        "Giáo dục", "Nhà đất", "Sức khỏe", "Giả thật", "Bạn đọc"
    ];

export default function HeaderNav(){
    return (
        <div className="flex justify-center shadow">
            <ul className="flex items-center">
                <li className="mr-4 text-red-700"><a  href=""><House width={20} height={20}/></a></li>
                {
                    categories.map((value, index) => (
                        <li className="mr-4"  key={index}>
                            <a className="text-xs font-semibold uppercase " href=""  >{value}</a>
                        </li>
                    ))
                }
                <li>
                    <ChevronDown />
                    <div className="">
                        <a href=""></a>
                    </div>
                </li>
                
                
            </ul>
        </div>
    );
}