using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularAuthentication.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/
        public ActionResult Index()
        {
            return View();
        }

        public String registeruser(Models.Register user)
        {
            List<Models.Register> registeredusers = (List<Models.Register>)Session["mylist"];
            if(registeredusers==null)
            {
                registeredusers = new List<Models.Register>();
                Session["mylist"] = registeredusers;
            }
            registeredusers.Add(user);
            return ("Registered Successfully");
        }
        public String ValidateUser(Models.Login user)
        {
            List<Models.Register> registeredusers = (List<Models.Register>)Session["mylist"];
            if(registeredusers.Contains((from r in registeredusers where r.name == user.username select r).FirstOrDefault()))
            {
                return "Login Successful";
            }
            return "login Failed";
        }

        public String GetPassword(String id)
        {
            List<Models.Register> registeredusers = (List<Models.Register>)Session["mylist"];
            Models.Register user=(from r in registeredusers where r.name ==id  select r).FirstOrDefault();
            if (registeredusers.Contains(user))
            {
                return user.password;
            }
            return "Incorrect UserName";
        }
	}
}