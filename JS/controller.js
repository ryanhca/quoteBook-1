var app = angular.module('quoteBook');

app.controller("MainController", function($scope, mainService){
    $scope.test = "Hello There!"
    $scope.quotes = mainService.getData();
    
    $scope.addQuote = function(){
        
    }
    
    $scope.removeQuote = function(){
        
    }
    
    $scope.filterQuotes = function(){
        
    }
    
    
});
