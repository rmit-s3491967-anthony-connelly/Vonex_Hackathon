package routers

import (
	"vonex_hack_backend/controllers"
	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/", &controllers.MainController{})
	beego.Router("/verify_user", &controllers.VerifyUserController{}, "post:Post")
}