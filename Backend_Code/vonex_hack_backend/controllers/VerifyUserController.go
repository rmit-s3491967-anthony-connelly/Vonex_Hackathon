package controllers

// https://github.com/vonex-labs/HackathonBackend

import (
	"encoding/json"
	"github.com/astaxie/beego"
	"vonex_hack_backend/services"
)

type VerifyUserController struct {
	beego.Controller
}

type VerifyUserRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type VerifyUserResponse struct {
	Status string `json:"status"`
	Message string `json:"message"`
	Login bool `json:"login"`
}

func (this *VerifyUserController) Post() {
	var request VerifyUserRequest
	if err := json.Unmarshal(this.Ctx.Input.RequestBody, &request); err != nil {
		// something is wrong when parse the request
		res := VerifyUserResponse{
			Status: "Fail",
			Message: "invalid request: " + err.Error(),
			Login: false,
		}
		this.Data["json"] = res
		this.ServeJSON()
		return
	}

	username := request.Username
	password := request.Password
	login := services.VerifyUser(username, password)

	res := VerifyUserResponse{
		Status: "success",
		Message: "User Logged In",
		Login: login,
	}
	this.Data["json"] = res
	this.ServeJSON()


}