﻿using System;
using System.Collections.Generic;

#nullable disable

namespace Project2_TCG.Models.Entities
{
    public partial class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public int? Currency { get; set; }
    }
}