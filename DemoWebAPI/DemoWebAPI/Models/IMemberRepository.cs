using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoWebAPI.Models
{
    public interface IMemberRepository
    {
        IEnumerable<Member> GetAll();
        Member Get(int id);
        Member Add(Member member);
        void Remove(int id);
        bool Update(Member member);
    }
}
