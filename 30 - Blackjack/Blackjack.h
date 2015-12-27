#ifndef BLACKJACK_H
#define BLACKJACK_H

#include "./lib/Deck.h"
#include "./lib/Player.h"

class Blackjack {
public:
    Blackjack(Deck deck, std::vector<Player*> players);
    void start();
    void session();
    void next();
    void playBank();
    void payout();
private:
    Deck m_deck;
    std::vector<Player*> m_players;
    Player* m_current;
};

#endif
