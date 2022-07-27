use serde::{Deserialize, Serialize};
#[allow(dead_code)]
#[allow(unused_imports)]
use serde_json::Result;
use std::{fs, io};

#[derive(Serialize, Deserialize)]
struct Word {
    english: String,
    japanese: String,
}

fn main() {
    let mut words = Vec::new();
    #[allow(while_true)]
    while true {
        let mut english_word = String::new();
        println!("Japanese: ");
        io::stdin().read_line(&mut english_word).unwrap();
        let english_word = english_word.trim();
        if english_word == "quit" {
            break;
        }
        let word = Word {
            japanese: english_word.trim().to_string(),
            english: String::new(),
        };
        words.push(word);
    }
    for i in 0..words.len() {
        println!("English for '{}': ", &words[i].japanese);
        let mut japanese_word = String::new();
        io::stdin().read_line(&mut japanese_word).unwrap();
        words[i].english = japanese_word.trim().to_string();
    }
    // Write as JSON
    let json = serde_json::to_string(&words).unwrap();

    let mut filename = String::new();
    println!("Filename: ");
    io::stdin().read_line(&mut filename).unwrap();
    let filepath = format!("{}.json", filename.trim());
    fs::write(filepath, json).unwrap();
}
