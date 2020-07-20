using DemoWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;

namespace DemoWebAPI.Controllers
{
    public class MemberController : ApiController
    {
        static readonly IMemberRepository repository = new MemberRepository();

        public IEnumerable<Member> GetAllMembers()
        {
            return repository.GetAll();
        }

        public Member GetMember(int id) 
        {
            Member member = repository.Get(id);
            if (member == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return member;
        }

        public HttpResponseMessage PostMember(Member member)
        {
            Thread.Sleep(3000);
            member = repository.Add(member);
            var response = Request.CreateResponse<Member>(HttpStatusCode.Created, member);

            string uri = Url.Link("DefaultApi", new { id = member.Id });
            response.Headers.Location = new Uri(uri);
            return response;
        }

        public void PutMember(int id, Member member)
        {
            Thread.Sleep(3000);
            member.Id = id;
            if (!repository.Update(member))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }

        public void DeleteMember(int id)
        {
            Thread.Sleep(3000);
            Member member = repository.Get(id);
            if (member == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            repository.Remove(id);
        }
    }
}
