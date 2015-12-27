#ifndef DECK_H
#define DECK_H

#include "Card.h"
#include <vector>

class Deck {
public:
    explicit Deck();
    void shuffle();
    Card* draw();
    void debug();
private:
    std::vector<Card*> cards;
    std::vector<Card*> drawnCards;
};

#endif
