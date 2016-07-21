const ScrollDown = ($timeout) => ({
  restrict: 'A',
  link($scope, $element, $attrs) {
    $scope.$watch($attrs.scrollDown, () => {
      let parent = $element.parent()[0];
      $timeout(() => parent.scrollTop = parent.scrollHeight);

    });

  }
});

ScrollDown.$inject = ['$timeout'];

export default ScrollDown;
