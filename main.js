var module=angular.module("mainApp",[]);
module.controller("Ctrl1",function($scope){
	$scope.storage=localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
	$scope.visible=false;
	
	$scope.addTask=function(item){
		if(!item) return;
		$scope.storage.push({"name":item, "comments":[]});
		localStorage.setItem("tasks", JSON.stringify($scope.storage));
		$scope.task="";
	};

	$scope.delTask=function(item){
		$scope.storage.splice(item,1);
		localStorage.setItem("tasks", JSON.stringify($scope.storage));
		$scope.visible=false;
	};

	$scope.checkTask=function(item){
		$scope.visible=true;
		$scope.commentsStorage=item.comments;
	};

	$scope.addComment=function($event,comment){
		 if($event.which == 10 && $event.ctrlKey){
		 	$scope.commentsStorage.push(comment);
		 	localStorage.setItem("tasks", JSON.stringify($scope.storage));
		 	$scope.comment="";
		 }
	};
});


