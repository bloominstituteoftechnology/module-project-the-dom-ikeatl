function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  const widgetSection = document.querySelectorAll('div');
  widgetSection.forEach(div => {
    div.classList.add("widget")
  });


  // 👉 TASK 2 - Build a "Quote of the Day" widget
  const quoteData = {
    text: "The only way to do great work is to love what you do.",
    author: 'Steve Jobs'
  };
  function buildQuoteWidget(data) {
    const quoteWidget = document.querySelector(".quoteoftheday");
    const quoteHeading = document.querySelector('.quoteoftheday h3');
    const quoteText = document.createElement("p");
    const quoteAuthor = document.createElement('p');

    quoteHeading.textContent = 'Quote of the Day';
    quoteText.textContent = `${data.text}`;
    quoteAuthor.textContent = `- ${data.author}`;

    quoteWidget.appendChild(quoteHeading);
    quoteWidget.appendChild(quoteText);
    quoteWidget.appendChild(quoteAuthor);

  }
  buildQuoteWidget(quoteData)

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  const corporateSpeak = {
    text: 'We need to streamline our initiatives out-of-the-boxedly in order to evolve our synergies synergistically.'
  };
  function buildCorporateSpeak(data) {
    const corporateWidget = document.querySelector(".corporatespeak");
    const corporateHeading = document.querySelector('.corporatespeak h3');
    const corporateText = document.createElement('p');

    corporateHeading.textContent = 'Corporate Speak';
    corporateText.textContent = `${data.text}`;

    corporateWidget.appendChild(corporateText);
  }
  buildCorporateSpeak(corporateSpeak)

  // 👉 TASK 4 - Build a "Countdown" widget
  const countdown = {
    text: 'Liftoff! 🚀'
  };
  function buildCountdown(data) {
    const countdownWidget = document.querySelector('.countdown');
    const countdownHeading = document.querySelector('.countdown h3');
    const countdownText = document.createElement('p');

    countdownHeading.textContent = 'Countdown';
    countdownText.textContent = `${data.text}`;

    countdownWidget.appendChild(countdownText);
  }
  buildCountdown(countdown)

  // 👉 TASK 5 - Build a "Friends" widget
  const firendsData = {
    text: 'Michael Chen was born in 1995 and is friends with Carlos Garcia, Mohammed Ali and Jason Wong.'
  };
  function buildFriendsWidget(data) {
    const friendsWidget = document.querySelector('.friends');
    const friendsHeading = document.querySelector('.friends h3');
    const friendsText = document.createElement('p');

    friendsHeading.textContent = 'Friends';
    friendsText.textContent = `${data.text}`;

    friendsWidget.appendChild(friendsText)
  }
  buildFriendsWidget(firendsData)

  // 👉 TASK 6 - Make it so user can tab through the widgets
  function makeWidgetTabbable(widgetSelector) {
    const widget = document.querySelector(widgetSelector);

    if (widget) {
      const focusableElements = widget.querySelectorAll('h3, p');

      focusableElements.forEach((element, index) => {
        element.tabIndex = index + 1;
      });
    }
  }

  // Apply the function for each widget

  makeWidgetTabbable('.quoteoftheday');
  makeWidgetTabbable('.corporatespeak');
  makeWidgetTabbable('.countdown');
  makeWidgetTabbable('.friends');

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
