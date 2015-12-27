#ifndef CARD_H
#define CARD_H

#include "CardEnum.cpp"
#include <string>

class Card {
public:
    explicit Card(CardEnum::Color color, CardEnum::Type type, CardEnum::Face face);
    std::string getColor() const;
    std::string getType() const;
    std::string getFace() const;
    int getValue() const;
    std::string toString();
private:
    CardEnum::Color m_color;
    CardEnum::Type m_type;
    CardEnum::Face m_face;
};

#endif
