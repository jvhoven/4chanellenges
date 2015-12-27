#include <iostream>
#include "./lib/Player.h"
#include "./lib/Deck.h"
#include "Blackjack.h"

using namespace CardEnum;

int main() {
    unsigned int numberOfPlayers = 0;
    std::vector<Player*> players;

    std::cout << "Welcome to blackjack! With how many players do you want to play?" << std::endl;
    std::cin >> numberOfPlayers;

    Deck deck;
    Player* bank = new Player("bank");

    for(unsigned int i = 0; i < numberOfPlayers; i++) {
        std::string name = "";
        std::cout << "Enter player " << i+1 << " name: " << std::endl;
        std::cin >> name;

        Player* plr = new Player(name);
        players.push_back(plr);
    }

    players.push_back(bank);
    Blackjack blackjack(deck, players);
    blackjack.start();
}
