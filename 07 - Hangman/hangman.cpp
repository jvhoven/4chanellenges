#include <iostream>
#include <iomanip>
#include <random>
#include <string>

// Forward declaration
void guess();
void verifyInput(std::string word);
void verifyInput(char c);
void addToGuessed(char c);
void showGuessedWord();
bool containsLetter(char c);
char* dissectWord();
std::string pickWord();
int random(int min, int max);

// Global
const std::string WORDS[] = { "noodzaak", "waardering", "overeenkomst", "wandeling", "vis" };
std::string chosenWord = pickWord();
char *guessedWord = dissectWord();
bool guessed = false;

int main() {
    unsigned int tries = sizeof(chosenWord);
    std::cout << "Welcome to hangman, you have " << tries << " tries. Good luck!" << std::endl;
    showGuessedWord();

    while(guessed == false && tries > 0) {
        guess();
        tries--;
        guessed == false ? std::cout << tries << " tries left." << std::endl : std::cout << std::endl;
    }

    if(!guessed) {
        std::cout << "The word was: " << chosenWord << std::endl;
        std::cout << "Game over." << std::endl;
    } else {
        std::cout << "You won!" << std::endl;
    }
    delete guessedWord;
}

void guess() {
    std::string input = "";
    std::cout << "Fill in a letter or guess the word from the get go: " << std::endl;
    std::cin >> input;

    if(input.length() > 1) {
        verifyInput(input);
    } else if(input.length() == 1){
        const char * c = input.c_str();
        verifyInput(*c);
    }
}

// Verify input for word guess
void verifyInput(std::string word) {
    if(word == chosenWord) {
        std::cout << "Congratulations the word was indeed " << chosenWord << "!" << std::endl;
        guessed = true;
    } else {
        std::cout << "Sorry that is not the word.." << std::endl;
    }
}

// Verify input for character guess
void verifyInput(char c) {
    if(containsLetter(c)) {
        std::cout << "Word contains the letter: " << c << std::endl;
        addToGuessed(c);
        showGuessedWord();
    } else {
        std::cout << "Word does not contain the letter: " << c << std::endl;
    }
}

void addToGuessed(char c) {
    std::size_t found = chosenWord.find_first_of(c);
    while (found != std::string::npos)
    {
        guessedWord[found] = c;
        found = chosenWord.find_first_of(c, found+1);
    }
}

void showGuessedWord() {
    std::string currentGuessedWord = "";
    for(unsigned int i = 0; i < chosenWord.length(); ++i) {
        currentGuessedWord += guessedWord[i];
    }

    std::cout << "Your current guesses lead to: " << currentGuessedWord << std::endl;
}

std::string pickWord() {
    int index = random(0, 4);
    return WORDS[index];
}

bool equals(std::string word) {
    if(chosenWord == word) {
        return true;
    }
    return false;
}

bool containsLetter(char c) {
    for(char& ch : chosenWord) {
        if(c == ch) {
            return true;
        }
    }

    return false;
}

char* dissectWord() {
    char *dissected = new char[chosenWord.length()];
    for(unsigned int i = 0; i < chosenWord.length(); ++i) {
        dissected[i] = '_';
    }

    return dissected;
}

int random(int a, int b) {
    thread_local std::mt19937 eng{std::random_device{}()};
    std::uniform_int_distribution<int> dist(a, b);
    return dist(eng);
}
