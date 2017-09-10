
import {Movie} from './Movie'; 
export class UsersService {
   
   
    userArray: Movie[];
    insertToArray(newUser: Movie) {
        this.userArray.push(newUser);
    }
    
    removeItem(deleteUser: Movie) {
        console.log(deleteUser);
        let userToDelete = this.userArray.indexOf(deleteUser);
        this.userArray.splice(userToDelete, 1);
    }
    getUserArray(newUserArray: Movie[]){
         this.userArray = newUserArray;
        return this.userArray;
    }

}