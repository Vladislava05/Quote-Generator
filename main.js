
new Vue({
    el: '#main__inner',
    data:{
        item: 'Click to get a quote',
        quotes: ["Live as if you were to die tomorrow. Learn as if you were to live forever.", "That which does not kill us makes us stronger.",
        "We must not allow other people's limited perceptions to define us.", "Do what you can, with what you have, where you are.", "Be yourself; everyone else is already taken.", "If you cannot do great things, do small things in a great way.", "Strive not to be a success, but rather to be of value.",
        "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", "Do not let what you cannot do interfere with what you can do."
    
    ],
        random: 0,
        url: "https://twitter.com/intent/tweet?text=",
        finalUrl: "",
        authors: ["Mahatma Gandhi", "Friedrich Nietzsche", "Virginia Satir", "Theodore Roosevelt", "Oscar Wilde", "Napoleon Hill", "Albert Einstein", "Robert Frost", "John Wooden"],
        author: ''
    },
    methods: {
        newQuote: function(){
            this.random = Math.floor(Math.random() * this.quotes.length);
            
            this.item = this.quotes[this.random];
            this.author = this.authors[this.random];
            this.finalUrl = this.url + this.item;
        }
    }
})
