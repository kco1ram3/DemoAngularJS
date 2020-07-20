using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DemoWebAPI.Models
{
    public class MemberRepository : IMemberRepository
    {
        private List<Member> members = new List<Member>();
        private int _nextId = 1;

        public MemberRepository()
        {
            Add(new Member { Name = "Name1", Surname = "Surname1", Email = "email1@localhost.com", ProvinceId = 10, DistrictId = 1001, SubDistrictId = 100101 });
            Add(new Member { Name = "Name2", Surname = "Surname2", Email = "email2@localhost.com", ProvinceId = 11, DistrictId = 1101, SubDistrictId = 110101 });
            Add(new Member { Name = "Name3", Surname = "Surname3", Email = "email3@localhost.com", ProvinceId = 12, DistrictId = 1201, SubDistrictId = 120101 });
        }

        public IEnumerable<Member> GetAll()
        {
            return members;
        }

        public Member Get(int id)
        {
            return members.Find(p => p.Id == id);
        }

        public Member Add(Member member)
        {
            if (member == null)
            {
                throw new ArgumentNullException("member");
            }
            member.Id = _nextId++;
            members.Add(member);
            return member;
        }

        public void Remove(int id)
        {
            members.RemoveAll(p => p.Id == id);
        }

        public bool Update(Member member)
        {
            if (member == null)
            {
                throw new ArgumentNullException("member");
            }
            int index = members.FindIndex(p => p.Id == member.Id);
            if (index == -1)
            {
                return false;
            }
            members.RemoveAt(index);
            members.Add(member);
            return true;
        }
    }
}