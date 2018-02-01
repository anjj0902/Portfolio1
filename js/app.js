var gApp = angular.module('gApp', []);
    gApp.run(function($rootScope){
    	$rootScope.address = "서울시 금천구 가산디지털2로 115 대륭테크노타운3차";
    	$rootScope.dns = "GooDee";
    	$rootScope.title = "Portfolio";
    	$rootScope.name = "안재준";
        $rootScope.name2 = "솔레미오 홈페이지를 방문해주셔서 감사합니다.";
       
    });
	gApp.controller('gCtrl', function($scope) {
		$scope.htmlCheck = false;
		$scope.bodyCheck = false;
		$scope.btCheck = false;
		$scope.projectFlag = false;
		$scope.projectUrl = "";
		$scope.btnActive = 1;
		
		$scope.dropEvent = function() {
			$scope.htmlCheck = !$scope.htmlCheck;
			$scope.bodyCheck = !$scope.bodyCheck;
			$scope.btCheck   = !$scope.btCheck;
		};
		
		$scope.projectEvent = function(rows) {
			$scope.row = rows;
			if($scope.projectUrl == rows.url) {
				$scope.projectUrl = "";
				$scope.projectFlag = false;
			} else {
				$scope.projectUrl = rows.url;
				$scope.projectFlag = true;
			}
		}
		
		$scope.iFrameLink = function(){
			if($scope.iframeView){
				location.href = $scope.iframeView;
			}
		}
		
		$scope.btnList = [
			{filter: "*",      name: "All",      active: true },
			{filter: ".bgOn",  name: "Personal", active: false},
			{filter: ".bgOff", name: "Team",     active: false}
		];
		
		$scope.dataSource = [
			{
			 path: "portfolio/",
			 url : "team/team.pdf", 
			 title: "Team",
			 name: "Impression",
			 img: "team/TeamImpression.png",
			 type : true, 
			 contents: "벤치마킹 사이트이다 보니 최대한 비슷하게 만들어야하는 과정이 고됬고 힘들었지만 팀원들끼리 각각 나누어 정해진 날짜에 완료하도록 하여 큰 뿌듯함을 느꼈습니다. 그 과정중 에서 팀원들끼리 더욱 돈독해지게 되었고, 다음에 서로 기술력을 더 쌓아 다시한번 모여서 프로젝트를 진행하고 싶습니다."
			},{
			 path: "portfolio/",
			 url : "personal/personal.pdf", 
			 title: "Personal",
			 name: "Impression",
			 img: "personal/PersonalImpression.JPG",
			 type : false,
			 contents: "교육기관에서 처음 프로젝트 인 팀프로젝트를 참고하여 만든 것으로 Spring java 기반으로 만든 프로젝트입니다. 저희 부모님 가게를 홍보차원에서 개발한 프로젝트이며 처음부터 끝까지 저 혼자 스스로 개발하다보니 많은 어려움이 존재하였습니다. 매일 남아 무조건 내가 계획한 일정안에 마무리 짓겠다는 단념하에 매일 남아서 마무리 짓는데에 몰두하였습니다. 끝내 결과물을 완성짓고 많이 부족한 프로젝트이지만 많은 뿌듯함을 느끼게 되었습니다. 추후에 제 실력을 향상시켜 이 솔레미오 프로젝트의 완성도를 더욱 높이고 싶습니다."
			},{
			 path: "media/",
			 url : "personal.mp4", 
			 title: "Personal",
			 name: "Media",
			 img: "personal/PersonalMedia.png",
			 type : false, 
			 contents: ""
			}
		];
		
		$scope.btnEvnet = function(index){
			$scope.projectUrl = "";
			$scope.projectFlag = false;
			
			for(var i = 0; i < $scope.btnList.length; i++){
				$scope.btnList[i].active = false;
			}
			$scope.btnList[index].active = true;
			$scope.grid.isotope({ filter: $scope.btnList[index].filter });
		}
		
		setTimeout(function(){
			$scope.grid = $('#portfolioGroup').isotope();
		}, 200);
	});
	gApp.directive('resize', function ($window) {
	    return function (scope, element) {
	        var w = angular.element($window);
	        scope.getWindowDimensions = function () {
	            return {
	                'h': w.height(),
	                'w': w.width()
	            };
	        };
	        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
	            if(newValue.w >= 768){
					scope.htmlCheck = false;
					scope.bodyCheck = false;
					scope.btCheck = false;
				}
	        }, true);

	        w.bind('resize', function () {
	            scope.$apply();
	        });
	    }
	});
