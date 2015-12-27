#include "Card.h"
#include <string>

using namespace CardEnum;

Card::Card(Color color, Type type, Face face)
    : m_color(color), m_type(type), m_face(face) {
}

std::string Card::getColor() const {
    if(m_color == Color::Red) {
        return "Red";
    }

    return "Black";
}

std::string Card::getType() const {
    switch(m_type) {
        case Type::Clubs:
            return "Clubs";
            break;
        case Type::Diamonds:
            return "Diamonds";
            break;
        case Type::Hearts:
            return "Hearts";
            break;
        case Type::Spades:
            return "Spades";
            break;
    }

    return "";
}

std::string Card::getFace() const {
    switch(m_face) {
        case Face::Two: return "Two"; break;
        case Face::Three: return "Three"; break;
        case Face::Four: return "Four"; break;
        case Face::Five: return "Five"; break;
        case Face::Six: return "Six"; break;
        case Face::Seven: return "Seven"; break;
        case Face::Eight: return "Eight"; break;
        case Face::Nine: return "Nine"; break;
        case Face::Ten: return "Ten"; break;
        case Face::Jack: return "Jack"; break;
        case Face::Queen: return "Queen"; break;
        case Face::King: return "King"; break;
        case Face::Ace: return "Ace"; break;
    }

    return "";
}

int Card::getValue() const {
    switch(m_face) {
        case Face::Two: return 2; break;
        case Face::Three: return 3; break;
        case Face::Four: return 4; break;
        case Face::Five: return 5; break;
        case Face::Six: return 6; break;
        case Face::Seven: return 7; break;
        case Face::Eight: return 8; break;
        case Face::Nine: return 9; break;
        case Face::Ten: return 10; break;
        case Face::Jack: return 10; break;
        case Face::Queen: return 10; break;
        case Face::King: return 10; break;
        case Face::Ace: return 11; break;
    }

    return 0;
}

std::string Card::toString() {
    std::string start = "[";
    return start + getFace() + " " + getType() + "]";
}
