
    function update () {
        player.setVelocityX(0);

        if (cursors.left.isDown)
         {
             player.setVelocityX(-250);
         }
        else if (cursors.right.isDown)
        {
             player.setVelocityX(250);
        }


        if (cursors.up.isDown && (player.body.onFloor() || player.body.touching.down))
        {
           player.setVelocityY(-400);
        }
    }


