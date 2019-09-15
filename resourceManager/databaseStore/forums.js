import Reflux from "reflux";

import db from "../database";

import Actions from "../actions";

class Forums extends Reflux.Store {
	constructor()
	{
        super();
		this.state = {
            forums: db.get("forums").value()
        };
		this.listenToMany(Actions.database.forums);
	}

	updateForum(object){

    }
}

export default new Forums;