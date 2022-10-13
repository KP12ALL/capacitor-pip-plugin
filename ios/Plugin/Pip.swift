import Foundation

@objc public class Pip: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
