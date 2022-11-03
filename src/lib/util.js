class DriftNode {
	constructor(position, visited, slug, id, threeID) {
		this.position = position;
		this.visited = visited;
		this.slug = slug;
		this.id = id;
		this.threeID = id;
	}
}

class TravelMap {
	constructor(appendCallback) {
		this.appendCallback = appendCallback;
		this.nodes = new Array();
	}

	prependNode(node) {
		this.nodes.unshift(node);
		this.appendCallback();
	}
}
