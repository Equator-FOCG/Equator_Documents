---
sidebar_position: 4
---

# ECS Architecture ⛔

[ECS (Entity Component Systems)](https://en.wikipedia.org/wiki/Entity_component_system) improves the flexibility and maintainability of game development by separating logic, data, and entities. This architectural pattern helps reduce code complexity and decoupling, thereby enhancing performance and development efficiency.

ECS 通过将逻辑、数据和实体分离，提高了游戏开发的灵活性和可维护性。这种架构模式有助于降低代码复杂度，减少耦合，从而提升性能和开发效率。

## What is ECS?

1. Entity: An entity is a basic object in the game world, such as a character, prop, or scene object. The entity does not contain any data or logic itself, but is a unique identifier that is used to associate components and systems.

2. Component: Components are used to store the properties and data of an entity. Each component is responsible for representing a specific feature or function, such as location, speed, or health. Components contain only data and no logic. By combining different components, entities with various functions and characteristics can be easily created.

3. System: The system is responsible for handling game logic and behavior. Systems perform operations based on the components that the entity owns. For example, a system that handles movement will look for entities with location and speed components and update their locations based on their speed. The system is independent of the entity and component, making the game logic more modular and reusable.

1. 实体（Entity）：实体是游戏世界中的基本对象，如角色、道具或场景物体等。实体本身并不包含任何数据或逻辑，而只是一个唯一标识符，用于关联组件和系统。

2. 组件（Component）：组件用于存储实体的属性和数据。每个组件负责表示一个特定的特征或功能，例如位置、速度或生命值等。组件只包含数据，不包含任何逻辑。通过将不同的组件组合在一起，可以轻松地创建具有各种功能和特性的实体。

3. 系统（System）：系统负责处理游戏逻辑和行为。系统根据实体所拥有的组件来执行相应的操作。例如，一个处理移动的系统会查找具有位置和速度组件的实体，并根据其速度更新位置。系统独立于实体和组件，使得游戏逻辑更加模块化和可复用。

## Practical problems solved

The ECS model helps to address some of the problems with traditional object-oriented programming (OOP) in game development, such as overly deep inheritance hierarchies and difficulties with code reuse. ECS makes the construction of game objects more flexible, and complex behaviours can be easily created by combining different components. Additionally, ECS helps optimize performance, especially when dealing with a large number of game objects. Many modern game engines, such as Unity and Godot, have adopted ECS as their core architecture.

Fully on-chain game engines like MUD, Dojo, etc., all adopt the ECS (Entity Component System) architecture.