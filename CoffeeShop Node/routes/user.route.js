const userController = require("../coffeeApp/controller/user.controller")
const {authUser, authAdmin} = require("../coffeeApp/middleware/auth.middleware")
const upload = require("../coffeeApp/middleware/upload.middleware")
const router = require("express").Router()

router.post("/add", userController.adduser)
router.post("/addAdmin", authUser, authAdmin, userController.addAdmin)
router.get("/logout",authUser , userController.logOut )
//router.patch("/" , authUser , userController.editProfile)
//get("/all", authUser, userController.showAll)
//router.get("/all/:id", userController.showSingle)
//router.delete("/all/:id", userController.delSingle)
router.patch("/editSingle", authUser,  userController.editSingle)
router.post("/login", userController.login)
router.get("/myProfile", authUser, userController.myProfile)
router.get("/showAllusers", authUser,authAdmin, userController.showAllUsers)


router.post("/changePassword" , authUser , userController.changepassword)
// router.post("/changeStatus/:id", authUser, userController.changeStatus)
// router.post("/changeImg", authUser,upload.single("image") , userController.uploadImage)
module.exports = router