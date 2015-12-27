#include "Player.h"
#include <iostream>

Player::Player(std::string name) :
    m_name(name), m_status(Status::WAITING) {
}

void Player::activate() {
    std::cout << m_name << " it's your turn!" << std::endl;
    setStatus(Status::PLAYING);
    showCards();
}

void Player::play() {
    std::string cmd = "";
    std::cout << "What would you like to do? Draw a card or stop?" << std::endl;
    std::cin >> cmd;

    if(cmd == "stop") {
        setStatus(Status::QUIT);
    } else if(cmd == "draw") {
        setStatus(Status::DRAWING);
    }
}

void Player::setStatus(Status status) {
    m_status = status;
}

Status Player::getStatus() const {
    return m_status;
}

std::string Player::getName() const {
    return m_name;
}

int Player::getTotal() const {
    return m_total;
}

// Draw while playing
void Player::addCard(Card * c, bool b) {
    std::cout << "Drew card " << c->toString() << std::endl;
    if(m_total + c->getValue() > 21 && hasAce()) {
        m_total += -10;

    // If player draws ace
    } else if(m_total + c->getValue() > 21 && c->getValue() == 11) {
        m_total += 1;
    } else {
        m_total += c->getValue();
    }

    cards.push_back(c);
    if(m_total == 21) {
        std::cout << "Blackjack, nice!" << std::endl;
        setStatus(Status::WON);
        return;
    } else if(m_total > 21) {
        std::cout << "Over 21, you're dead..." << std::endl;
        setStatus(Status::DEAD);
        return;
    }

    setStatus(Status::PLAYING);
}

// Draw first two
void Player::addCard(Card* c) {
    cards.push_back(c);
    m_total += c->getValue();

    if(m_total == 21) {
        std::cout << "Blackjack, nice!" << std::endl;
        setStatus(Status::WON);
    }
}

bool Player::hasAce() {
    for(Card* c: cards) {
        if(c->getValue() == 11) {
            return true;
        }
    }

    return false;
}

void Player::showCards() {
    std::cout << "Your cards: " << cards.size() << std::endl;
    for(Card* c: cards) {
        std::cout << "\t" << c->toString() << std::endl;
    }
}
