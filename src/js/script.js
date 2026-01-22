
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  // お問い合わせフォームのラジオボタン切り替え
  const $radioButtons = $('input[name="お問い合わせ種別"]');
  const $trialFields = $('.contact__form-item--trial');

  // 初期表示の設定
  function updateFormFields() {
    const selectedValue = $('input[name="お問い合わせ種別"]:checked').val();
    if (selectedValue === '体験レッスン申し込み') {
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
