package services

import "fmt"

func VerifyUser(username, password string) bool {
	fmt.Println("Username:", username, "Password:", password)
	if (username == "test" && password == "password") {
		return true
	} else {
		return false
	}

}