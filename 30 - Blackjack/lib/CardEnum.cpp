namespace CardEnum {
    enum class Face {
        Two,
        Three,
        Four,
        Five,
        Six,
        Seven,
        Eight,
        Nine,
        Ten,
        Jack,
        Queen,
        King,
        Ace,
        First = Two,
        Last = Ace
    };

    enum class Type {
        Clubs,
        Diamonds,
        Hearts,
        Spades,
        First = Clubs,
        Last = Spades
    };

    enum class Color {
        Black,
        Red,
        First = Black,
        Last = Red
    };
}
