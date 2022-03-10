class user{
    var id;
    var username;
    var password;
}
 class userservice{
    user[] users = [];

    user[] getallusers(){
        return this.users;
    }

    user getuserbyid(userid){
        return this.users.filter(userid);
    }

 }



//  JAWABAN
//  Nama class seharusnya menggunakan pascal case atau menggunakan kapital di setiap kata, jadi nama class di atas harusnya:
//  class user -> class User
//  class userservice -> class UserService
//
//  Nama fungsi/method seharusnya menggunakan camel case atau menggunakan kapital pada kata kedua dan seterusnya, jadi nama fungsi di atas harusnya:
//  getallusers() -> getAllUsers()
//  getuserbyid() -> getUserById()
//
//  Pada baris 13, parameter "userid" seharunsya "id" saja karena sudah jelas bahwa fungsinya memerlukan parameter yaitu id dari user