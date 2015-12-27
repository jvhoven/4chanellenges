#include "Blackjack.h"
#include "./lib/PlayerEnum.h"
#include <iostream>

Blackjack::Blackjack(Deck deck, std::vector<Player*> players)
    : m_deck(deck), m_players(players) {
}

void Blackjack::start() {
    std::cout << "Shuffling deck..." << std::endl;
    m_deck.shuffle();

    // give each player two cards
    for(Player* p: m_players) {
        for(unsigned int i = 0; i < 2; i++) {
            p->addCard(m_deck.draw());
        }
    }

    m_current = m_players.at(0);
    session();
}

void Blackjack::session() {
    m_current->activate();
    Status playerStatus = m_current->getStatus();
    while(playerStatus == Status::PLAYING || playerStatus == Status::DRAWING) {

        if(m_current->getName() == "bank") {
            playBank();
            break;
        }

        if(playerStatus == Status::DRAWING) {
            m_current->addCard(m_deck.draw(), true);
        } else {
            m_current->play();
        }

        playerStatus = m_current->getStatus();
    }

    next();
}

void Blackjack::playBank() {
    while(m_current->getTotal() < 20) {
        m_current->addCard(m_deck.draw(), true);
    }

    m_current->setStatus(Status::DEAD);
    payout();
}

void Blackjack::next() {
    for(Player *p: m_players) {
        if(p->getStatus() == Status::WAITING) {
            m_current = p;
            session();
            break;
        }
        m_current = nullptr;
    }
}

void Blackjack::payout() {
    // TODO: Get people that won
}
