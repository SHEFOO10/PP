<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'category',
        'instructor_id',
    ];

    public function instructor()
    {
        return $this->belongsTo(User::class, 'instructor_id');
    }

    public function materials()
    {
        return $this->hasMany(CourseMaterial::class);
    }
    // Accessor method to convert duration from minutes to hours and minutes
    public function getDurationHoursAttribute()
    {
        return floor($this->duration / 60); // Get hours
    }

    public function getDurationMinutesAttribute()
    {
        return $this->duration % 60; // Get remaining minutes
    }
}
