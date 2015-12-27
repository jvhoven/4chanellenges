#ifndef PLAYER_H
#define PLAYER_H

#include "Card.h"
#include "PlayerEnum.h"
#include <vector>

class Player {
public:
    Player(std::string name);
    void play();
    void activate(); // When its his turn to play
    void addCard(Card* c, bool b);
    void addCard(Card* c);
    void showCards();
    void setStatus(Status status);
    bool hasAce();
    Status getStatus() const;
    std::string getName() const;
    int getTotal() const;
private:
    std::string action;
    Status m_status;
    std::string m_name;
    std::vector<Card*> cards;
    int m_total;
};

#endif
