"use strict";

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  // お問い合わせフォームのラジオボタン切り替え
  var $radioButtons = $('input[name="inquiry-type"]');
  var $trialFields = $('.contact__form-item--trial');

  // 初期表示の設定
  function updateFormFields() {
    var selectedValue = $('input[name="inquiry-type"]:checked').val();
    if (selectedValue === 'trial') {
      $trialFields.show();
    } else {
      $trialFields.hide();
    }
  }

  // ページ読み込み時に実行
  updateFormFields();

  // ラジオボタン変更時に実行
  $radioButtons.on('change', updateFormFields);
});