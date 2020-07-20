using DemoWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DemoWebAPI.Controllers
{
    public class ProvinceController : ApiController
    {
        Province[] provinces = new Province[] 
        { 
            new Province { Id = 10, Name = "กรุงเทพมหานคร" },
			new Province { Id = 11, Name = "สมุทรปราการ" },
			new Province { Id = 12, Name = "นนทบุรี" },
			new Province { Id = 13, Name = "ปทุมธานี" },
			new Province { Id = 14, Name = "พระนครศรีอยุธยา" },
			new Province { Id = 15, Name = "อ่างทอง" },
			new Province { Id = 16, Name = "ลพบุรี" },
			new Province { Id = 17, Name = "สิงห์บุรี" },
			new Province { Id = 18, Name = "ชัยนาท" },
			new Province { Id = 19, Name = "สระบุรี" },
			new Province { Id = 20, Name = "ชลบุรี" },
			new Province { Id = 21, Name = "ระยอง" },
			new Province { Id = 22, Name = "จันทบุรี" },
			new Province { Id = 23, Name = "ตราด" },
			new Province { Id = 24, Name = "ฉะเชิงเทรา" },
			new Province { Id = 25, Name = "ปราจีนบุรี" },
			new Province { Id = 26, Name = "นครนายก" },
			new Province { Id = 27, Name = "สระแก้ว" },
			new Province { Id = 30, Name = "นครราชสีมา" },
			new Province { Id = 31, Name = "บุรีรัมย์" },
			new Province { Id = 32, Name = "สุรินทร์" },
			new Province { Id = 33, Name = "ศรีสะเกษ" },
			new Province { Id = 34, Name = "อุบลราชธานี" },
			new Province { Id = 35, Name = "ยโสธร" },
			new Province { Id = 36, Name = "ชัยภูมิ" },
			new Province { Id = 37, Name = "อำนาจเจริญ" },
			new Province { Id = 38, Name = "บึงกาฬ" },
			new Province { Id = 39, Name = "หนองบัวลำภู" },
			new Province { Id = 40, Name = "ขอนแก่น" },
			new Province { Id = 41, Name = "อุดรธานี" },
			new Province { Id = 42, Name = "เลย" },
			new Province { Id = 43, Name = "หนองคาย" },
			new Province { Id = 44, Name = "มหาสารคาม" },
			new Province { Id = 45, Name = "ร้อยเอ็ด" },
			new Province { Id = 46, Name = "กาฬสินธุ์" },
			new Province { Id = 47, Name = "สกลนคร" },
			new Province { Id = 48, Name = "นครพนม" },
			new Province { Id = 49, Name = "มุกดาหาร" },
			new Province { Id = 50, Name = "เชียงใหม่" },
			new Province { Id = 51, Name = "ลำพูน" },
			new Province { Id = 52, Name = "ลำปาง" },
			new Province { Id = 53, Name = "อุตรดิตถ์" },
			new Province { Id = 54, Name = "แพร่" },
			new Province { Id = 55, Name = "น่าน" },
			new Province { Id = 56, Name = "พะเยา" },
			new Province { Id = 57, Name = "เชียงราย" },
			new Province { Id = 58, Name = "แม่ฮ่องสอน" },
			new Province { Id = 60, Name = "นครสวรรค์" },
			new Province { Id = 61, Name = "อุทัยธานี" },
			new Province { Id = 62, Name = "กำแพงเพชร" },
			new Province { Id = 63, Name = "ตาก" },
			new Province { Id = 64, Name = "สุโขทัย" },
			new Province { Id = 65, Name = "พิษณุโลก" },
			new Province { Id = 66, Name = "พิจิตร" },
			new Province { Id = 67, Name = "เพชรบูรณ์" },
			new Province { Id = 70, Name = "ราชบุรี" },
			new Province { Id = 71, Name = "กาญจนบุรี" },
			new Province { Id = 72, Name = "สุพรรณบุรี" },
			new Province { Id = 73, Name = "นครปฐม" },
			new Province { Id = 74, Name = "สมุทรสาคร" },
			new Province { Id = 75, Name = "สมุทรสงคราม" },
			new Province { Id = 76, Name = "เพชรบุรี" },
			new Province { Id = 77, Name = "ประจวบคีรีขันธ์" },
			new Province { Id = 80, Name = "นครศรีธรรมราช" },
			new Province { Id = 81, Name = "กระบี่" },
			new Province { Id = 82, Name = "พังงา" },
			new Province { Id = 83, Name = "ภูเก็ต" },
			new Province { Id = 84, Name = "สุราษฎร์ธานี" },
			new Province { Id = 85, Name = "ระนอง" },
			new Province { Id = 86, Name = "ชุมพร" },
			new Province { Id = 90, Name = "สงขลา" },
			new Province { Id = 91, Name = "สตูล" },
			new Province { Id = 92, Name = "ตรัง" },
			new Province { Id = 93, Name = "พัทลุง" },
			new Province { Id = 94, Name = "ปัตตานี" },
			new Province { Id = 95, Name = "ยะลา" },
			new Province { Id = 96, Name = "นราธิวาส" }
        };

        public IEnumerable<Province> GetAllProvince()
        {
            return provinces;
        }

        public IHttpActionResult GetProvince(int id)
        {
            var province = provinces.FirstOrDefault((p) => p.Id == id); 
            if (province == null)
            {
                return NotFound();
            }
            return Ok(province);
        }
    }
}
