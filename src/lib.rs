pub const WITH_TIMER: bool = true;
pub mod generation;
pub mod models;
pub mod object_detection;
pub mod pipelines;
pub mod quantized_nn;
pub mod quantized_var_builder;
pub mod utils;

struct Timer {
    label: &'static str,
}

// impl Timer {
//     fn new(label: &'static str) -> Self {
//         if WITH_TIMER {
//             web_sys::console::time_with_label(label);
//         }
//         Self { label }
//     }
// }

impl Drop for Timer {
    fn drop(&mut self) {
        if WITH_TIMER {
            web_sys::console::time_end_with_label(self.label)
        }
    }
}

mod app;
mod audio;
pub mod languages;
pub mod worker;
pub use app::App;
pub use worker::Worker;
