package main

import (
	"fmt"
	_ "vonex_hack_backend/routers"
	"github.com/astaxie/beego"
	// "vonex_hack_backend/services"
)

func main() {
	fmt.Println("Hello Hack")
	beego.Run()

}