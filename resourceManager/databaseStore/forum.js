import Reflux from "reflux";

import db from "../database";

import Actions from "../actions";

class Forum extends Reflux.Store {
	constructor()
	{
        super();
		this.store = Store.database.forums;
		this.listenToMany(Actions.database.forum);
	}

	updateUserGroup(object){

    }
}

export default Forum;