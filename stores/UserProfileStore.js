import { observable, action } from "mobx"

class UserProfileStore {
    @observable displayProfile = false;

    @action toggleDisplayProfile = _ => {
        this.displayProfile = this.displayProfile = true;
    }
}

const userProfileStore = new UserProfileStore();
export default userProfileStore      