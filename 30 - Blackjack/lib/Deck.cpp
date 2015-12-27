#include "Deck.h"
#include "EnumUtil.cpp"
#include <iostream>
#include <algorithm>
#include <random>

using namespace CardEnum;

Deck::Deck() {
    for (auto type: Enum<Type>()) {
        Color color = (type == Type::Diamonds || type == Type::Hearts) ? Color::Red : Color::Black;

        for(auto face: Enum<Face>()) {
            Card* card = new Card(color, type, face);
            cards.push_back(card);
        }
    }
}

void Deck::shuffle() {
    std::random_device rd;
    std::mt19937 g(rd());
    std::shuffle(cards.begin(), cards.end(), g);
    for(unsigned int i = 0; i < 5; i++) {
        std::random_shuffle(cards.begin(), cards.end());
    }
}

Card* Deck::draw() {
    Card* card = cards.at(0);
    drawnCards.push_back(card);

    cards.erase(cards.begin());
    cards.shrink_to_fit();
    
    return card;
}

void Deck::debug() {
    for (Card* card: cards) {
        std::cout << card->toString() << std::endl;
    }
}
